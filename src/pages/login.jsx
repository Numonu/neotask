import Input from "@/components/atoms/Input";
import Head from "next/head";

export default function Login(){
    return <>
        <Head>
            <title>Login in Neotask</title>
        </Head>
        <div className="text-neutral-900 bg-neutral-50 min-h-screen">
            <Input/>
        </div>
    </>
}