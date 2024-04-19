import JiviHeader from "../ui/JiviHeader";

const Success = () => {
    return (
        <>
            <JiviHeader title="Success" />
            <section className="absolute top-1/3">
                <div>
                    <p className="font-bold">Thank you.</p>
                    <p>Your details are saved successfully.</p>
                </div>
            </section>
        </>
    )
}

export default Success;