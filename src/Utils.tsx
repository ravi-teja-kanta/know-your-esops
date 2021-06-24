import { notification } from "antd"
import {Text} from "./components/SubComponents"
export function handleSubmit(values: any, actions: { setSubmitting: (arg0: boolean) => void }) {
    // @ts-ignore
    const finalScore = Object.values(values).reduce((p: number, c: number) => p + c, 0);

    if (Object.keys(values).length !== 18) {
        actions.setSubmitting(false)
        alert("Please fill the form before submitting.");
    } else {
        console.log(finalScore);
        notification.open({
          duration: 0,
          message: <Text>{"Your score is " + (Number(finalScore)/32)*100 + "%"}</Text>,
        })
        actions.setSubmitting(false)
    }
  }