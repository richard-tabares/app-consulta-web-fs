import { useEffect, useState } from "react"

export const WebConstruction = () => {
  

  return (
    <>

      <section className="w-screen h-screen bg-label text-white p-20 lg:grid lg:grid-cols-3">

        <section className="col-span-1">

          <h1 className="text-4xl font-semibold">We are</h1>
          <h1 className="text-4xl font-semibold pb-5">Under Construction</h1>
          <p className="text-xl">
            We are improving our website
          </p>
          <p>
            We'will be back as soon as possible with new cool features!
          </p>
          <p>

          </p>


        </section>

        <section className="col-span-2">

          <img src="../public/development.png" alt=""/>

        </section>

      </section>

    </>
  )
}
