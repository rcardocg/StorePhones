import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Todo() {
  return (
    <div>
      <br></br>
      <TablaProductos />
      <Contacto />
    </div>
  );
}

function TablaProductos() {
  return (
    <>
     <React.Fragment>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'left' }}>
            <Typography variant="body2" color="text.secondary">
              Innovación, elegancia y rendimiento líder en la industria de la tecnología
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: '20%', height: '20%', float: 'center' }}
              image="src/pages/img/iphone_15.jpg"
              title="Apple"
            />
          </CardContent>
          <CardActions>
            <Button size="small">Agregar al carrito</Button>
          </CardActions>
        </Card>
      </React.Fragment>
   
    
      <br></br>
      <React.Fragment>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'left' }}>
            <Typography variant="body2" color="text.secondary">
              Innovación, elegancia y rendimiento líder en la industria de la tecnología
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: '20%', height: '20%', float: 'center' }}
              image="src/pages/img/iphone_SE.jpg"
              title="Apple"
            />
          </CardContent>
          <CardActions>
            <Button size="small">Agregar al carrito</Button>
          </CardActions>
        </Card>
      </React.Fragment>
   
      <br></br>
      <React.Fragment>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'left' }}>
            <Typography variant="body2" color="text.secondary">
              Innovación, elegancia y rendimiento líder en la industria de la tecnología
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: '20%', height: '20%', float: 'center' }}
              image="src/pages/img/iphone_12.jpg"
              title="Apple"
            />
          </CardContent>
          <CardActions>
            <Button size="small">Agregar al carrito</Button>
          </CardActions>
        </Card>
      </React.Fragment>
   
    </>
  );
}

function Contacto() {
  return (
    <>
      <React.Fragment>
        <Card>
          <CardMedia sx={{ height: 20 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Informacion de contacto
            </Typography>
            <Typography variant="body2">Ricardo Caballeros 19001133</Typography>
            <Typography variant="body2">Pablo Siquinajay 22006477</Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    </>
  );
}
export default function App() {
  return <Todo />;
}
