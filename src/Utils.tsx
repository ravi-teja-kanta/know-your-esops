import { notification, Statistic } from "antd"
import ScoreCard from "./components/ScoreCardComponent";
import {Text} from "./components/SubComponents"
export function handleSubmit(values: any, actions: { setSubmitting: (arg0: boolean) => void }) {

    notification.open({
        duration: 0,
        message: <ScoreCard values={values} />,
    })

    actions.setSubmitting(false)
  }