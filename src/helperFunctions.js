

export const getVenues = () => 
     fetch('https://api.foursquare.com/v2/venues/search?ll=51.5558,-1.7797&intent=browse&radius=10000&query=hotels&client_id=4G20JZ5NGRARY0EZ12E1I5CU5MFYJ2NL3ZJZOL044X3C5A0A&client_secret=U3YBYX5S5SJQQTJ5E0WSSB10JXUO5G5YOERECDDPWZ52TCFF&v=20180824')

export const getStreetView = (lat, lng) => {
     let url = `https://maps.googleapis.com/maps/api/streetview?size=300x300&location=` + lat + `,` + lng + `&fov=90&heading=180&pitch=0&key=AIzaSyCXprUHPvRyqaLjZ27B5ZS1tu8tclJ_wVQ`
     return url
}
