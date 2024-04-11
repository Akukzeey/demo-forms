'use client'
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    useEffect(() => {

        const admissionSubmitted = localStorage.getItem('admissionSubmitted');

        if (admissionSubmitted !== 'true') {
            router.push('/');
        }
    }, [router]);

    return (
        <div id='Register-success'>
            <div className='success-register-container'>
                <div className='success-div'>
                    <TiTick style={{color:'white',fontSize:'35px'}}/>
                </div>
                <h1 className='success-header'>Success</h1>
                <p className='success-p-tag'>Your admission form was submitted successfully.</p>
                <button className="btn-success button-success  btn-sm" type="button">
                    <Link  className="nav-link" href='/'>
                        CONTINUE
                    </Link>
                </button>
            </div>
        </div>
    );
}