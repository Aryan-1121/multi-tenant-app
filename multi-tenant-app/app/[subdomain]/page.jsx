'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { subDomainData } from "../utils/subDomainData";
export default function SubDomainComponent() {
  const params = useParams();
  const tenant = params.subdomain;
  return (
    <div className={`flex place-content-center ${subDomainData.get(tenant).bgColour}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={subDomainData.get(tenant).image} alt="subdomain image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{subDomainData.get(tenant).heading}</div>
          <p className={subDomainData.get(tenant).styles}>
            {subDomainData.get(tenant).content}
          </p>
        </div>
      </div>
    </div>
  )


}


















