/*
 * @Description:
 * @Author: 惜神
 * @Date: 2021-09-02 17:15:11
 */
import axios from '@/utils/request'
import qs from 'qs'

export const getFoodList = (data) => axios.get(`/api/food?${qs.stringify(data)}`)
