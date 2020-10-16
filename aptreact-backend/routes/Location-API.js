var location = unirest("GET", "https://www.universal-tutorial.com/api/states/United States");

req.headers({
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdXN5anVzdGljZUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ3U0pKTHdzQlZDNnNkek9Zb2lMTU96bVdJR3cwTDRCV016aVU1VlEtMGo1b3g3SWVvbXljRk1MeVJ0YU5ickRad2swIn0sImV4cCI6MTYwMjg4NzYwNH0.HxguhZdLMKxXUHdDhFM9OSXsYq9j0O--LpyWNDpeEzs",
  "Accept": "application/json"
});

export default location;
  
  