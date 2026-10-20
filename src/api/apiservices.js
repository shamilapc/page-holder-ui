import axiosInstance from "./axiosinstance"


const apiservice = async (httpmethod, url, reqbody) => {

    const reqConfig = {
        method: httpmethod,
        url,                      
        data: reqbody
    }

    try {
        const result = await axiosInstance(reqConfig)
        return result
    }
    catch (err) {
        return err
    }

}

export default apiservice