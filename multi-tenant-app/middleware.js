import { NextResponse } from "next/server";

import subdomains from './subdomains.json';


export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export async function middleware(req) {

  // getting url from request, and host name from headers

  const url = req.nextUrl;
  const hostName = req.headers.get("host") || '';

  // array containing list of allowed domain names/hostnames. need to be modified later when deployed to some production server
  const allowedDomains = ['localhost:3000'];

  // iterating through allowedDomains array to check if hostName from headers is in the array
  const isDomainPresent = allowedDomains.some((domain) => hostName.includes(domain));


  // extracting the subdomain from the hostName (before [dot])
  const subdomain = hostName.split(".")[0];
  console.log('middleware subdomain ->', subdomain);


  // we have this subdomain value from req headers, now we need to check if it exists in our subdomains array (defined in subdomains.json), if not exists then return the url as it is else if exists then re-write the url by appending the subdomain to the url
  if (isDomainPresent && !subdomains.some((element) => element.subdomain === subdomain)) {
    return NextResponse.next();
  }

  const isSubdomainPresent = subdomains.find((element) => element.subdomain === subdomain);
  if (isSubdomainPresent) {
    return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}`, req.url));
  }

  return new Response(null, { status: 404 });

}















