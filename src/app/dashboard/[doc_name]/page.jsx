import Title from "@/components/atoms/Title"
import { unformatRoute } from "@/utilities/format"

export default function TaskPage({params}){
    return <>
        <div className="wrapper min-h-screen py-16">
            <Title>{unformatRoute(params.doc_name)}</Title>
        </div>
    </>
}