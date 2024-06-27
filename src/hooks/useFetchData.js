import {useEffect} from 'react';
export default function useFetchData(url,method,setData,requestData=null) {
    
    const request =  {};
    request["method"] = method;
    request["mode"] = "cors";
    request["headers"] = {
        "Content-Type":"application/json",
    }
    if(requestData) {
        request["body"] = JSON.stringify(requestData);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Step 1: Authenticate and get JWT token
                const authResponse = await fetch("http://localhost:5000/auth/login", {
                    method: 'POST',
                    mode:'cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "email": "example@test.com",
                        "password": "12345678"
                    })
                });
                if (!authResponse.ok) {
                    throw new Error('Authentication failed');
                }
                const authData = await authResponse.json();
                const accessToken = authData.accessToken;
                request["headers"] = {...request["headers"],Authorization:"Bearer "+accessToken};
                console.log(request);

                // Step 2: Fetch actual data using the token
                const taskResponse = await fetch(url, request);
                if (!taskResponse.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const taskData = await taskResponse.json();
                setData(taskData);
                console.log(taskData);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
}