import {BASE_URL} from './baseUrl';
import { commonApi } from "./commanApi";

export const getProduct=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/get-allProduct`,"",headers)
}
export const addProduct=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/add-product`,data,headers)
}