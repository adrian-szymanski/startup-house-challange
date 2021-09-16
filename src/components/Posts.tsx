import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import axios from "axios";

  function Posts() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    useEffect(() => {
      axios.get(url).then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
    })

    return (
        <Card sx={{width: 275, display: 'block', mx: '20px', my: "20px"}}>
          <CardContent>
            <Typography sx={{fontSize: 16, fontStyle: 'bold'}} color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <br/>
            <Typography sx={{fontSize: 12}} color="text.secondary" gutterBottom>
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Full Version</Button>
          </CardActions>
        </Card>
    );
  }


  export default Posts;
