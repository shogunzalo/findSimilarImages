import { useRouter } from 'next/router';
import Image from '../components/Image';

const Page = () => {
  const router = useRouter();

  return (
    <div>
        <h1>{router.query.hash}</h1>

        {router.query.resultList.map(image => {
            return <Image imageName={image}></Image>
        })}
    </div>
  );
};

export default Page;