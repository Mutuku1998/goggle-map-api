function initMap() {
    var options = {
        center: {lat: 0.0236, lng: 37.9062},
        zoom: 8,
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    // google.maps.event.addListener(map,"click",(event) =>{
    //     addMarker({location:event.latLng});
    // })

    // markers array

   let markersArray = [
        {location:{lat:-3.5107, lng: 39.9093},imageIcon:"https://img.icons8.com/nolan/2x/marker.png",content:'<div> <h3>You can get unlimited internet</h3><br/> <p> Mawingu is available in your area,please click the button below to request connection</p></div>'},


        { location:{lat:1.2921, lng: 36.8219}},
        {location:{lat:-4.0435, lng: 39.6682}},

    ]

    //loop marker
     for(let i =0 ;i< markersArray.length;i++){
     addMarker(markersArray[i]);

     }

function addMarker(props){
  const marker = new google.maps.Marker({
   position:props.location,
    map,
   icon: props.imageIcon,
   });

   if(props.imageIcon){
    marker.setIcon(props.imageIcon)
   }
   if(props.content){
    
    const infowindow = new google.maps.InfoWindow({
        content: props.content,
        
      });
      marker.addListener("mouseover", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
    });
   }

}
// addMarker();
// addMarker();
// addMarker();

}
