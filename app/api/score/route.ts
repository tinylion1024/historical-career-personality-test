import { NextRequest, NextResponse } from 'next/server';
import { calculateResult } from '@/lib/calculate';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers } = body;

    if (!Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'answers must be an array' },
        { status: 400 }
      );
    }

    const result = calculateResult(answers);

    return NextResponse.json({
      scores: result.scores,
      result: {
        primary: result.result.primary.name,
        secondary: result.result.secondary.name,
        shadow: result.result.shadow.name,
      },
    });
  } catch (error) {
    console.error('Score calculation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
