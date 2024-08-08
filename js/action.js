function getFetch(url, jsonCondition) {
    urlOpen=''
    if(jsonCondition!==undefined){
        urlOpen='?'+Object.entries(jsonCondition).map(([key,value])=>key+'='+value).join('&')
    }
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(content => {
            return content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}
function addFetch(url,jsonValue){
    fetch(url,{
        method: 'POST', // Phương thức POST
        headers: {
            'Content-Type': 'application/json' // Đặt Content-Type là application/json
        },
        body: jsonValue // Chuyển đổi đối tượng JSON thành chuỗi JSON
    })
    .then(response => {
        if (!response.ok) {
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
function updateFetch(url,jsonValue,id){
    fetch(url+'/'+id,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: jsonValue 
    })
    .then(response => {
        if (!response.ok) {
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
function deleteFetch(url,id){
    fetch(url+'/'+id)
    .then(response => {
        if (!response.ok) {
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
