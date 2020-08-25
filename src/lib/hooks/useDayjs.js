import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'

export const useDayjs = () => {
    dayjs.locale('ru')
    dayjs.extend(relativeTime)

    const options = {
        short: 'MMM YYYY',
        long: 'h:mm a, MMMM DD YYYY',
        strict: 'DD.MM.YYYY - H:mm',
        timer: 'm:ss'
    }

    return { dayjs, options }

}