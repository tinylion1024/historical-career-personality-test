// Encode result to URL-safe base64
export function encodeResult(result: { primary: string; secondary: string; shadow: string }): string {
  const json = JSON.stringify(result);
  // Use base64url encoding (URL-safe)
  const base64 = btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  ));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

// Decode result from URL-safe base64
export function decodeResult(encoded: string): { primary: string; secondary: string; shadow: string } | null {
  try {
    // Restore standard base64
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }
    const json = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

// Generate shareable URL
export function generateShareUrl(result: { primary: string; secondary: string; shadow: string }): string {
  const encoded = encodeResult(result);
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  return `${baseUrl}/result?r=${encoded}`;
}
