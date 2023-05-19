import Title from "@/components/atoms/Title"
import { unformatRoute } from "@/utilities/format"

export default function TaskPage({params}){
    const title = unformatRoute(params.task_name);
    return <>
        <div className="wrapper min-h-screen py-16">
            <Title>{title}</Title>
        </div>
    </>
}