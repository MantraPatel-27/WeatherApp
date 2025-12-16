import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const init_url="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rain="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className='infobox'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain :info.temp>15 ? hot :cold}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {info?.city || '—'}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Weather: {info?.weather || '—'}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Temperature: {info?.temp ?? '—'}°C
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Feels Like: {info?.feelsLike ?? '—'}°C
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Humidity: {info?.humidity ?? '—'}%
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Min: {info?.tempMin ?? '—'}°C | Max: {info?.tempMax ?? '—'}°C
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
