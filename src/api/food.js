import axios from '@/utils/request'
import qs from 'qs'

export const getFoodList = (data) => axios.get(`/api/getInnovateList?${qs.stringify(data)}`)
