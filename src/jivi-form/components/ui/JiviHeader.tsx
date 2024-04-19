type JiviHeaderProps = {
    title: string;
}

const JiviHeader = (props: JiviHeaderProps) => {
    return (
        <>
            <header className="mb-2 pb-2 border-b-2">
                <p className='text-base font-bold text-jiviBlack'>
                    {props.title}
                </p>
            </header>
        </>)
}

export default JiviHeader;