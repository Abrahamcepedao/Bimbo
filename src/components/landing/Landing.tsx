import Form from "./form/Form"
import Question from "./Question"

const Landing = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-8">
            <Question />
            <Form />
        </div>
    )
}

export default Landing