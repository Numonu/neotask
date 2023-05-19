import Title from "@/components/atoms/Title"

export default function TaskPage({params}){
    const unformatedTitle = params.task_name.replace(/\-/g , " ")
    return <>
        <div className="wrapper min-h-screen px-4 py-16">
            <Title>{unformatedTitle}</Title>
        </div>
    </>
}