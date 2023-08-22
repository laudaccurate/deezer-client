import ArtistDetails from '@/components/Content/ArtistDetails';
import DefaultContent from '@/components/Content/Default';
import { LoadingContext } from '@/components/Utils/LoadingFallback';
import { API_URL } from '@/lib/constants';
import notify from '@/lib/notify';
import { useRouter } from 'next/router';
import React, {useState, useContext} from 'react';

export default function ArtistPage (){
  const router = useRouter();
  const {pageLoading, setPageLoading} = useContext(LoadingContext);
  const [artist, setArtist] = useState(null);

  React.useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch(`/api/artist/${router.query.id}`, requestOptions as RequestInit)
      .then((response) => response.json())
      .then((result) => {
        setArtist(result);
        setPageLoading(false)
      })
      .catch((error) => {
        console.log("error", error);
        
         notify.error({
          title: "Query Error",
          message: "Error fetching Artist information"
         })
      });
  }, [router.query.id, setPageLoading])

  return(

    <div>
      <div className="w-full">
        {!artist ? (
          <DefaultContent />
        ) : (
          <ArtistDetails artist={artist}/>
        )}
      </div>
    </div>

  )

}