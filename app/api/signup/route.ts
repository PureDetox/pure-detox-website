import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailsRef = collection(db, 'email_signups');
    const q = query(emailsRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { message: 'Email already registered', email: email },
        { status: 200 }
      );
    }

    // Add email to Firestore
    const docRef = await addDoc(collection(db, 'email_signups'), {
      email: email,
      timestamp: serverTimestamp(),
      source: 'coming-soon-page',
      status: 'subscribed'
    });

    console.log('New email signup added with ID: ', docRef.id);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed!',
        email: email,
        id: docRef.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Firebase email signup error:', error);
    
    // Handle specific Firebase errors
    if (error instanceof Error) {
      if (error.message.includes('Permission denied')) {
        return NextResponse.json(
          { error: 'Database permission error. Please check Firebase rules.' },
          { status: 500 }
        );
      }
      if (error.message.includes('apiKey')) {
        return NextResponse.json(
          { error: 'Firebase configuration error. Please check your setup.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}