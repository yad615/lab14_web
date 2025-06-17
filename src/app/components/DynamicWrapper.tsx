
'use client';

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>,
});

export default function DynamicWrapper() {
  return <DynamicComponent />;
}