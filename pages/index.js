import React from 'react'
import Image from 'next/image'
import { signIn, signOut, getSession } from "next-auth/react";


const Home = ({session}) => {


  return (
    <div>
    <div className="px-4 py-5 my-5 text-center">
    <Image className="d-block mx-auto mb-4" src="/public/icon-512x512.png" alt="" width="72" height="72" />
    <h1 className="display-5 fw-bold">Hammad Next Auth</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        
        
      {session ? (

            <div>
            <p>You are Signed in as {session.user.email}</p>
            <p>Name: {session.user.name}</p>
            <Image src={session.user.image} alt={session.user.name} width="80" height="80" /><br /><br />
            <button onClick={() => signOut()} type="button" className="btn btn-outline-secondary btn-lg px-4">Sign out</button>
   
            </div>

          ) : (
        <button onClick={() => signIn()} type="button" className="btn btn-primary btn-lg px-4 gap-3">Sign in</button>
      )}
   
      
      </div>
    </div>
  </div>



    </div>
  )
}

export default Home
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};