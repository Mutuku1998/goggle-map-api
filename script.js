function initMap() {
    var options = {
        center: {lat: 0.0236, lng: 37.9062},
        zoom: 8,
    };
    // var input = document.getElementById('searchinput');
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // var autocomplete = new google.maps.places.Autocomplete(input);
    // autocomplete.bindTo('bounds', map);

    var map = new google.maps.Map(document.getElementById("map"), options);

    // google.maps.event.addListener(map,"click",(event) =>{
    //     addMarker({location:event.latLng});
    // })

    // markers array



   let markersArray = [
        {location:{lat:-3.5107, lng: 39.9093},content:'<div> <h1>Kilifi</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'+message},


        { location:{lat:-4.1816, lng: 39.4606},content:'<div> <h1>Kwale</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'},
        { location:{lat:-3.3161, lng: 38.4850},content:'<div> <h1>Taita taveta</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'},
        { location:{lat:-1.8421, lng: 36.7919},content:'<div> <h1>Kajiando</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'},
        { location:{lat:-0.4532, lng: 39.6461},content:'<div> <h1>Garissa</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'},
        { location:{lat:1.7488, lng: 40.0586},content:'<div> <h1>Wajir</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'},
        { location:{lat:2.3355, lng: 37.9943},content:'<div> <h1>Masarbit</h1> <h3>You can get unlimited internet</h3><p> Mawingu is available in your area,please click the button below to request connection</p></div>'},
        { 
            location: {
              lat: 0.3556,
              lng: 37.5833
            },
            content: '<div style="text-align:center"> <h3>Isiolo</h3> <h4>You can get unlimited internet</h4><p> Mawingu is available in your area, please click the button below to request connection</p> <a href="#" style="background-color:blue; border-radius:10px; width:300px; line-height:20px; color:white; display:inline-block; text-align:center; text-decoration:none;">Get connected</a></div> '
          }
          
       
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
