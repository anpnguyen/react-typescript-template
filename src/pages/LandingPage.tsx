import Landing from '../components/lading/Landing';
import image from '../../src/assets/images/bg_1.jpg';

export default function LandingPage() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Landing />
        </div>
    );
}
