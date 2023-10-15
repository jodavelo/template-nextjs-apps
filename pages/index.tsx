import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';


// import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '../components/layouts';

const Index: NextPage = () => {


    return (
        <Layout title="Home">
            {/* <div>
                <h1>{ homeTranslate('title-page') }</h1>
                <h2>{ commonTranslate('text-test') }</h2>
            </div> */}
            <>
                <h1>aabajba</h1>
                {/* <SignUp/> */}
                {/* <VideoProvider>
                    <VideoContainer/>
                </VideoProvider> */}
            </>
        </Layout>
    )
}


export default Index;