
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Carta from "@/components/Carta";
 

export default async function Page() {

  const querySnapshot = await getDocs(collection(db, "productos"));
  const documentos = querySnapshot.docs.map((doc) => doc.data());

    return (
        <div>
            <div className="columns-5">
                {documentos.length > 0 ? (
                    documentos.map((doc,index) => (
                        <Carta url={doc.url} key={index}/>
                    ))
                ) : (
                    <p>No hay productos</p>
                )}
            </div>
        </div>
    );
}