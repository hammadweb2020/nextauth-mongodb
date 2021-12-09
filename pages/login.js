import { React, useEffect } from 'react'

import { getProviders, getSession } from 'next-auth/react'
import BtnLogin from '../components/BtnLogin';
import { useRouter } from "next/router";
import Router from "next/router";
import SignInError from './signin'


const Login = ({providers, session}) => {

const { error } = useRouter().query;


useEffect(() => {
    if(session) return Router.push('/');
  },[session])



    if(session) return null;
    return (
        <div className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}>
          <div style={{maxWidth: '450px', width: '100%'}}
          className="border border-1 max-auto p-4 shadow">
    
            <h2 className="text-center fw-bolder text-uppercase"
            style={{ color: '#555', letterSpacing: '1px' }}>
              Hammad Next Auth
            </h2>

            {error && <SignInError error={error} />}
    
            <p className="text-center">Login with NextAuth</p>
            <BtnLogin 
          provider={providers.google}
          bgColor='#f2573f'
        />
        <BtnLogin 
          provider={providers.facebook}
          bgColor='#0404be'
        />
        <BtnLogin 
          provider={providers.github}
          bgColor='#444'
        />
            </div>
            </div>


    )
}

Login.getInitialProps = async (context) => {
    return {
      providers: await getProviders(context),
      session: await getSession(context)
    }
  }


export default Login
