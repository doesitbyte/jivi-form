import { FormPageComponent } from "../../utils/formPageProps";
import JiviAgePicker from "../ui/JiviAgePicker";
import JiviHeader from "../ui/JiviHeader";

const AgePicker: FormPageComponent = ({ formMethods }) => {

    return (
        <>
            <JiviHeader title="Details" />
            <p className="my-6 text-jiviBlack font-extrabold text-[30px]">What is your age?</p>
            <div>
                <JiviAgePicker
                    control={formMethods.control}
                    name="age"
                />
            </div>
        </>
    )
}

export default AgePicker;