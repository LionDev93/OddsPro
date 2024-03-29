import axios from "axios";
import { API_URL, API_KEY_PARAM } from "../constants/config";

const StatusCode = {
  SUCCESS: 200,
  REDIRECTION: 300,
  CLIENT_ERROR: 400,
  SERVER_ERROR: 500,
}

export const first_card_api = async () => {
  try {
    let ret = false
      const config = {
        method: "GET",
        url: API_URL + `oddspro_api/firstcard_upcoming.php`,

      }


      console.log(config)
    const res = await axios(config);
    console.log(res)
    //if(res.status == StatusCode.SUCCESS)
    ret = res.status == StatusCode.SUCCESS

    return {
      status: ret,
      data: res.data,
      message: '',
    };
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};

export const previous_first_card_api = async () => {
  try {
    let ret = false
    const config = {
        method: "GET",
        url: API_URL + `oddspro_api/firstcard_previous.php`,
    }

    const res = await axios(config);
    ret = res.status == StatusCode.SUCCESS

    return {
      status: ret,
      data: res.data,
      message: '',
    };
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};


export const previous_live_record_api = async () => {
  try {
    let ret = false
    const config = {
        method: "GET",
        url: API_URL + `oddspro_api/firstcard_prev_live.php`,
    }

    console.log(config)
    const res = await axios(config);
    ret = res.status == StatusCode.SUCCESS
    console.log('previous_live_record_api', res)

    return {
      status: ret,
      data: res.data,
      message: '',
    };
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};



export const get_basic_info_api = async (race_num) => {
  try {
      const config = {
        method: "GET",
        url: API_URL + `oddspro_api/get_basicinfo.php?race_num=${race_num}`,

      }


      console.log(config)
    const res = await axios(config);
    console.log(res)
    let ret = res.status == StatusCode.SUCCESS
    return  {
      status: ret,
      data: res.data,
      message: '',
    };;
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};


export const get_upcoming_raceinfo_horsedetail_api = async (race_num) => {
  try {
      const config = {
        method: "GET",
        url: API_URL + `oddspro_api/get_upcoming_raceinfo_horsedetail.php?r=${race_num}`,

      }


      console.log(config)
    const res = await axios(config);
    console.log(res)
    let ret = res.status == StatusCode.SUCCESS
    return  {
      status: ret,
      data: res.data,
      message: '',
    };;
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};



export const get_raceodds_api = async (race_num, race_type) => {
  try {
      const config = {
        method: "GET",
        url: API_URL + `oddspro_api/get_raceodds.php?r=${race_num}&t=${race_type}`,

      }


    //console.log(config)
    const res = await axios(config);
    //console.log(res)
    let ret = res.status == StatusCode.SUCCESS
    return  {
      status: ret,
      data: res.data,
      message: '',
    };;
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};

export const get_horse_analysis = async (horse_id) => {
  try {
    const config = {
      method: "GET",
      url: API_URL + `oddspro_api/horse_analysis.php?id=${horse_id}`,

    }

    const res = await axios(config);

    let ret = res.status == StatusCode.SUCCESS
    return  {
      status: ret,
      data: res.data,
      message: '',
    };
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};

//https://anth1.myqnapcloud.com:8081/oddspro_api/race_analysis.php
export const race_analysis = async (raceid) => {
  try {
    const config = {
      method: "GET",
      url: API_URL + `oddspro_api/race_analysis.php?raceid=${raceid}`,

    }
    console.log(config)
    const res = await axios(config);
    console.log(res)
    let ret = res.status == StatusCode.SUCCESS



    return  {
      status: ret,
      data: res.data,
      message: res.data.message,
    };
  } catch (error) {
    console.log(error);
    // throw error.message;
    return {
      status: false,
      data: null,
      message: error.message,
    };
  }
};