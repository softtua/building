export default {
  async fetch(request) {
    // Strip the media.pic.art domain and keep path/query
    const url = new URL(request.url);
    const path = url.pathname + url.search;
    
    // Point to your actual R2 bucket (media.picai.art)
    const targetUrl = 'https://media.proximai.art' + path;
    
    // Clone the request and override Host header
    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: new Headers(request.headers)
    });
    newRequest.headers.set('Host', 'media.proximai.art');
    
    // Fetch and return the response
    return await fetch(newRequest);
  }
};
