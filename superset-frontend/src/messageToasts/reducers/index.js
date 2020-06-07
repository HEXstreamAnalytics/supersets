/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {
  ADD_TOAST,
  REMOVE_TOAST,
  GET_FOLDERVIEW_DATA,
  REMOVE_FOLDERVIEW_DATA,
  CHANGE_FOLDERVIEW_DATA,
  ADD_FOLDERVIEW_DATA,
} from '../actions';

const Init = {
  toasts: [],
  folderviewData: [
    {
      'ID': 1,
      'Head_ID': 0,
      'name': 'John Heart',
      'creator': 'Los Angeles',
      'modified': '1995-01-15'
    }, {
      'ID': 2,
      'Head_ID': 1,
      'name': 'Samantha Bright',
      'creator': 'Los Angeles',
      'modified': '2004-05-24'
    }, {
      'ID': 3,
      'Head_ID': 1,
      'name': 'Arthur Miller',
      'creator': 'Denver',
      'modified': '2007-12-18'
    }, {
      'ID': 4,
      'Head_ID': 1,
      'name': 'Robert Reagan',
      'creator': 'Bentonville',
      'modified': '2002-11-08'
    }, {
      'ID': 5,
      'Head_ID': 1,
      'name': 'Greta Sims',
      'creator': 'Atlanta',
      'modified': '1998-04-23'
    }, {
      'ID': 6,
      'Head_ID': 3,
      'name': 'Brett Wade',
      'creator': 'Reno',
      'modified': '2009-03-06'
    }, {
      'ID': 7,
      'Head_ID': 5,
      'name': 'Sandra Johnson',
      'creator': 'Beaver',
      'modified': '2005-05-11'
    }, {
      'ID': 8,
      'Head_ID': 4,
      'name': 'Ed Holmes',
      'creator': 'Malibu',
      'modified': '2005-06-19'
    }, {
      'ID': 9,
      'Head_ID': 3,
      'name': 'Barb Banks',
      'creator': 'Phoenix',
      'modified': '2002-08-07'
    }, {
      'ID': 10,
      'Head_ID': 2,
      'name': 'Kevin Carter',
      'creator': 'San Diego',
      'modified': '2009-08-11'
    }, {
      'ID': 11,
      'Head_ID': 5,
      'name': 'Cindy Stanwick',
      'creator': 'Little Rock',
      'modified': '2008-03-24'
    }, {
      'ID': 12,
      'Head_ID': 8,
      'name': 'Sammy Hill',
      'creator': 'Pasadena',
      'modified': '2012-02-01'
    }, {
      'ID': 13,
      'Head_ID': 10,
      'name': 'Davey Jones',
      'creator': 'Pasadena',
      'modified': '2011-04-24'
    }, {
      'ID': 14,
      'Head_ID': 10,
      'name': 'Victor Norris',
      'creator': 'Little Rock',
      'modified': '2012-07-23'
    }, {
      'ID': 15,
      'Head_ID': 10,
      'name': 'Mary Stern',
      'creator': 'Beaver',
      'modified': '2012-08-12'
    }, {
      'ID': 16,
      'Head_ID': 10,
      'name': 'Robin Cosworth',
      'creator': 'Los Angeles',
      'modified': '2012-09-01'
    }, {
      'ID': 17,
      'Head_ID': 9,
      'name': 'Kelly Rodriguez',
      'creator': 'Boise',
      'modified': '2012-10-13'
    }, {
      'ID': 18,
      'Head_ID': 9,
      'name': 'James Anderson',
      'creator': 'Atlanta',
      'modified': '2012-10-18'
    }, {
      'ID': 19,
      'Head_ID': 9,
      'name': 'Antony Remmen',
      'creator': 'Boise',
      'modified': '2013-01-19'
    }, {
      'ID': 20,
      'Head_ID': 8,
      'name': 'Olivia Peyton',
      'creator': 'Atlanta',
      'modified': '2012-05-14'
    }, {
      'ID': 21,
      'Head_ID': 6,
      'name': 'Taylor Riley',
      'creator': 'San Jose',
      'modified': '2012-04-14'
    }, {
      'ID': 22,
      'Head_ID': 6,
      'name': 'Amelia Harper',
      'creator': 'Los Angeles',
      'modified': '2011-02-10'
    }, {
      'ID': 23,
      'Head_ID': 6,
      'name': 'Wally Hobbs',
      'creator': 'Chatsworth',
      'modified': '2011-02-17'
    }, {
      'ID': 24,
      'Head_ID': 6,
      'name': 'Brad Jameson',
      'creator': 'San Fernando',
      'modified': '2011-03-02'
    }, {
      'ID': 25,
      'Head_ID': 6,
      'name': 'Karen Goodson',
      'creator': 'South Pasadena',
      'modified': '2011-03-14'
    }, {
      'ID': 26,
      'Head_ID': 5,
      'name': 'Marcus Orbison',
      'creator': 'Los Angeles',
      'modified': '2005-05-19'
    }, {
      'ID': 27,
      'Head_ID': 5,
      'name': 'Sandy Bright',
      'creator': 'Denver',
      'modified': '2005-06-04'
    }, {
      'ID': 28,
      'Head_ID': 6,
      'name': 'Morgan Kennedy',
      'creator': 'San Fernando Valley',
      'modified': '2012-01-11'
    }, {
      'ID': 29,
      'Head_ID': 28,
      'name': 'Violet Bailey',
      'creator': 'La Canada',
      'modified': '2012-01-19'
    }, {
      'ID': 30,
      'Head_ID': 5,
      'name': 'Ken Samuelson',
      'creator': 'St. Louis',
      'modified': '2009-04-22'
    }],
}

export default function messageToastsReducer(state = Init, action) {
  switch (action.type) {
    case ADD_TOAST: {
      const { payload: toast } = action;
      let { toasts } = state;
      toasts.push(toast);
      return {
        ...state,
        toasts
      }
    }

    case REMOVE_TOAST: {
      const {
        payload: { id },
      } = action;
      let { toasts } = state;
      toasts = toasts.filter(toast => toast.id !== id);
      return {
        ...state,
        toasts
      }
    }

    case GET_FOLDERVIEW_DATA: {
      let { folderviewData } = state;

      const len = folderviewData.length;
      for (var i = 0; i < len; i++) {
        let ok = 0;
        folderviewData.forEach(item => {
          if (folderviewData[i].ID === item.Head_ID) ok = 1;
        });
        folderviewData[i]["child"] = ok;
      }

      return {
        ...state,
        folderviewData
      };
    }

    case REMOVE_FOLDERVIEW_DATA: {
      let { folderviewData } = state;
      const { id } = action.payload;

      folderviewData = folderviewData.filter(item => item.ID != id);

      return {
        ...state,
        folderviewData
      };
    }

    case CHANGE_FOLDERVIEW_DATA: {
      let { folderviewData } = state;
      const { item } = action.payload;

      for (var i = 0; i < folderviewData.length; i++) {
        if (folderviewData[i].ID == item.ID) {
          folderviewData[i] = item;
          break;
        }
      }

      return {
        ...state,
        folderviewData
      };
    }

    case ADD_FOLDERVIEW_DATA: {
      let { folderviewData } = state;
      let { item } = action.payload;
      const len = folderviewData.length;
      let flag = [], index;
      for (let i = 1; i <= len; i++) flag.push(0);
      for (let i = 0; i < len; i++) {
        flag[folderviewData[i].ID] = 1;
      }
      for (index = 1; index <= len; index++) if (!flag[index]) break;
      item['ID'] = index;
      folderviewData.splice(item.index, 0, item); 

      return {
        ...state,
        folderviewData
      };
    }

    default:
      const { toasts } = state;

      return {
        ...state,
        toasts
      };
  }
}

// export default function messageToastsReducer(toasts = [], action) {
//   switch (action.type) {
//     case ADD_TOAST: {
//       const { payload: toast } = action;
//       return [toast, ...toasts];
//     }

//     case REMOVE_TOAST: {
//       const {
//         payload: { id },
//       } = action;
//       return [...toasts].filter(toast => toast.id !== id);
//     }

//     case GET_FOLDERVIEW_DATA: {
      
//     }

//     default:
//       return toasts;
//   }
// }
