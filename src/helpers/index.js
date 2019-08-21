import {ERROR_MESSAGE, SUCCESS_MESSAGE} from 'config/types/messageType';

export const currency = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  });

export const checkAndUncheck = (array) => {
    return array.reduce((a,b) => {
        let isIn = a.find(element => {
            return element._id === b._id
        });
        if(!isIn){
            a.push(b);
        }else{
            a.pop(b);
        }
        return a;
    },[]);
}

  export const number = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  });
  export const capitalize = (str) =>{
    if (str) {
      str = str.split(" ");
      for (var i = 0, x = str.length; i < x; i++) {
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }
      return str.join(" ");
    }
  }

  export const isValidPhoneAllCountry = input => {
    try {
      let ISD_CODES = [93, 355, 213, 1684, 376, 244, 1264, 672, 1268, 54, 374, 297, 61, 43, 994, 1242, 973, 880, 1246, 375, 32, 501, 229, 1441, 975, 591, 387, 267, 55, 246, 1284, 673, 359, 226, 257, 855, 237, 1, 238, 1345, 236, 235, 56, 86, 61, 61, 57, 269, 682, 506, 385, 53, 599, 357, 420, 243, 45, 253, 1767, 1809, 1829, 1849, 670, 593, 20, 503, 240, 291, 372, 251, 500, 298, 679, 358, 33, 689, 241, 220, 995, 49, 233, 350, 30, 299, 1473, 1671, 502, 441481, 224, 245, 592, 509, 504, 852, 36, 354, 91, 62, 98, 964, 353, 441624, 972, 39, 225, 1876, 81, 441534, 962, 7, 254, 686, 383, 965, 996, 856, 371, 961, 266, 231, 218, 423, 370, 352, 853, 389, 261, 265, 60, 960, 223, 356, 692, 222, 230, 262, 52, 691, 373, 377, 976, 382, 1664, 212, 258, 95, 264, 674, 977, 31, 599, 687, 64, 505, 227, 234, 683, 850, 1670, 47, 968, 92, 680, 970, 507, 675, 595, 51, 63, 64, 48, 351, 1787, 1939, 974, 242, 262, 40, 7, 250, 590, 290, 1869, 1758, 590, 508, 1784, 685, 378, 239, 966, 221, 381, 248, 232, 65, 1721, 421, 386, 677, 252, 27, 82, 211, 34, 94, 249, 597, 47, 268, 46, 41, 963, 886, 992, 255, 66, 228, 690, 676, 1868, 216, 90, 993, 1649, 688, 1340, 256, 380, 971, 44, 1, 598, 998, 678, 379, 58, 84, 681, 212, 967, 260, 263],
        //extract numbers from string
        thenum = input.match(/[0-9]+/g).join(""),
        totalnums = thenum.length,
        last10Digits = parseInt(thenum) % 10000000000,
        ISDcode = thenum.substring(0, totalnums - 10);
  
      //phone numbers are generally of 8 to 16 digits
      if (totalnums >= 8 && totalnums <= 16) {
        if (ISDcode) {
          if (ISD_CODES.includes(parseInt(ISDcode))) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    } catch (e) {}
  
    return false;
  }

  export const isValidNigeriaPhoneNumber = input => {
    try {
      let ISD_CODES = [234, '+234'],
        //extract numbers from string
        thenum = input.match(/[0-9]+/g).join(""),
        totalnums = thenum.length,
        last10Digits = parseInt(thenum) % 10000000000,
        ISDcode = thenum.substring(0, totalnums - 10);
  
      //phone numbers are generally of 8 to 16 digits
      if (totalnums >= 8 && totalnums <= 16) {
        if (ISDcode) {
          if (ISD_CODES.includes(parseInt(ISDcode))) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    } catch (e) {}
  
    return false;
  }

  //hasPermission(allowedpermission, usersPermissions)
  export const hasPermission = (permission, permissions) => {
      return permissions.some( p => p === permission)
  }

  export const isValidBankAccountNumber = input => {
      try {
          let thenum = input.match(/[0-9]+/g).join(""),
          totalnums = thenum.length,
          last10Digits = parseInt(thenum) % 10000000000,
          ISDcode = thenum.substring(0, totalnums - 9);
        if (totalnums >= 10 && totalnums <= 10) {
          if (ISDcode) {
              return true;
          } else {
            return false;
          }
        }
      } catch (e) {}
    
      return false;
    }
    
  export const isValidBVN = input => {
      try {
      let ISD_CODES = [2, '2'],
          //extract numbers from string
          thenum = input.match(/[0-9]+/g).join(""),
          totalnums = thenum.length,
          last10Digits = parseInt(thenum) % 10000000000,
          ISDcode = thenum.substring(0, totalnums - 10);
    
        //phone numbers are generally of 8 to 16 digits
        if (totalnums >= 11) {
          if (ISDcode) {
            if (ISD_CODES.includes(parseInt(ISDcode))) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        }
      } catch (e) {}
    
      return false;
  }

  export const isUnique = (array) => {
    return array.reduce((a,b) => {
        let isIn = a.find(element => {
            return element.STATE === b.STATE
        });
        if(!isIn){
            a.push(b);
        }
        return a;
    },[]);
  }

  export const errorHandler = (error) => async dispatch => {
    if(error.response !== undefined){
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: error.response.data.message
            } 
        });
    }else{
        dispatch({
            type:ERROR_MESSAGE, 
            payload: {
                success: false,
                message: `${error.message}. Server is temporarily down.`
            }
        });
    }
}

export const messageHandler = (response) => async dispatch => {
  if (response.data !== undefined) {
    dispatch({ 
      type: SUCCESS_MESSAGE, 
        payload: {
            success: true,
            message: response.data.message
        } 
    });
  }else{
    dispatch({ 
      type: SUCCESS_MESSAGE, 
      payload: {
          success: true,
          message: response
      } 
    });
  }
}