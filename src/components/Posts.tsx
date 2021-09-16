import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import axios from "axios";

  function Posts() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    useEffect(() => {
      axios.get(url).then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
    }, [])

    console.log(title);

    return (
      <div className="Posts">
        <Card sx={{width: 275, display: 'flex'}}>
          <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <br/>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Full Version</Button>
          </CardActions>
        </Card>
      </div>
    );
  }


  export default Posts;
