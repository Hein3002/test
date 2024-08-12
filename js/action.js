
 function getReponse(url, jsonCondition,jsonValue, token) {
    let urlOpen = url;
    if (jsonCondition !== undefined) {
        urlOpen += '?' + Object.entries(jsonCondition).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    }

    return fetch(urlOpen, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        body: jsonValue 
    })
        .then(response => {
            if (!response.ok) {
                deleteCookie(COOKIE_NAME)
                window.location = "https://searchgpt247.info/";
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching content:', error);   
            throw error; // Ném lại lỗi để có thể được xử lý bởi hàm gọi
        });
}

function getFetch(url, jsonCondition, token) {
    let urlOpen = url;
    if (jsonCondition !== undefined) {
        urlOpen += '?' + Object.entries(jsonCondition).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    }

    return fetch(urlOpen, {
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
    })
        .then(response => {
            if (!response.ok) {
                deleteCookie(COOKIE_NAME)
                window.location = "https://searchgpt247.info/";
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            throw error; // Ném lại lỗi để có thể được xử lý bởi hàm gọi
        });
}
function addFetch(url, jsonValue, token) {
   return fetch(url, {
        method: 'POST', // Phương thức POST
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        body: jsonValue // Chuyển đổi đối tượng JSON thành chuỗi JSON
    })
        .then(response => {
            if (!response.ok) {
                deleteCookie(COOKIE_NAME)
                window.location = "https://searchgpt247.info/";
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Giả sử phản hồi là JSON
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            throw error; // Ném lại lỗi để có thể được xử lý bởi hàm gọi
        });
}
function updateFetch(url, jsonValue, token) {
   return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        body: jsonValue
    })
        .then(response => {
            if (!response.ok) { 
                deleteCookie(COOKIE_NAME)
                window.location = "https://searchgpt247.info/";
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Giả sử phản hồi là JSON
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            throw error; // Ném lại lỗi để có thể được xử lý bởi hàm gọi
        });
}
function deleteFetch(url, id, token) {
    fetch(url + '/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
    })
        .then(response => {
            if (!response.ok) {
                deleteCookie(COOKIE_NAME)
                window.location = "https://searchgpt247.info/";
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Giả sử phản hồi là JSON
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error posting content:', error);
            throw error; // Ném lại lỗi để có thể xử lý bởi người gọi hàm
        });
}

//---------------



