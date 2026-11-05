"""Editable vector compositions. Original UI captures remain unmodified embedded assets."""
from pathlib import Path
import base64,html,textwrap
import cairosvg
from PIL import Image
ROOT=Path(__file__).parent
OUT=ROOT.parent.parent/'public'/'showcase'
OUT.mkdir(exist_ok=True,parents=True)
P=[
('nexa','Nexa Color Match','INTERIORS, INFORMED BY AI','#f2eee6','#292d25','#7d8668','nexa.png',['Flutter + Spring Boot','Python + OpenCV','Preferences + room complexity'],['Capture & mark','Analyze visual complexity','Explore wall colors'],['Flutter mobile','Spring Boot API','Python analysis','MySQL + S3'],'Team research · Rajarata University of Sri Lanka'),
('distribution','Distribution','OPERATIONS, CONNECTED','#e9eff3','#10293b','#28647a',None,['React + ASP.NET Core','Role-based workflows','Orders, payments & reporting'],['Manage product catalogues','Approve and track orders','Review payments & balances'],['React client','Role-protected API','Application services','PostgreSQL'],'Sanitized case study · Architecture illustration, not a dashboard'),
('sewzio','Sewzio','CRAFT, BEAUTIFULLY ORGANIZED','#111d2b','#f6eddb','#c2a36a','sewzio.png',['Flutter + SQLite','Sinhala + English','Measurements, orders & rentals'],['Reuse garment templates','Preserve order measurements','Manage rentals & payments'],['Flutter interface','Order + rental services','SQLite transactions','Local persistence'],'Actual Flutter application · Device capture'),
('meetmind','MeetMind AI','FROM SPEECH TO SHARED CONTEXT','#091525','#f0f7ff','#77dfcb','meetmindwide.png',['Chrome extension + Flutter','Sinhala + English captions','Transcript + question sync'],['Follow live transcript text','Ask contextual questions','Connect browser & Android'],['Chrome side panel','Speech recognition','Authenticated sync','Flutter companion'],'Extension UI preview · Idle state shown'),
('lumaedge','LumaEdge','LIGHT AT THE EDGE','#111516','#f4f5e9','#a8e7bd','lumaedge.png',['Native Android + Java','Adjustable screen overlay','Floating light controls'],['Choose tone and edge width','Adjust brightness & corners','Control the light in an overlay'],['Settings activity','Overlay service','WindowManager','Floating controls'],'Actual Android application · Device capture'),
('minipos','Flutter Mini POS','COMMERCE THAT MOVES WITH YOU','#f5f1e5','#263d35','#31836a','minipos.png',['Flutter + ASP.NET Core','PostgreSQL + local SQLite','Billing, receipts & sync'],['Create mobile sales','Preserve receipt snapshots','Queue and reconcile offline sales'],['Flutter mobile','Local cache + outbox','ASP.NET Core API','PostgreSQL'],'Sanitized device QA capture · Organization source not distributed')]
def txt(x,y,t,size=30,color='#fff',weight='400',family='DejaVu Sans'):
 return f'<text x="{x}" y="{y}" fill="{color}" font-size="{size}" font-weight="{weight}" font-family="{family}">{html.escape(t)}</text>'
def rect(x,y,w,h,c,r=0,stroke=None):
 return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{c}"'+(f' stroke="{stroke}" stroke-width="2"' if stroke else '')+'/>'
def ui(name,x,y,w,h):
 data=base64.b64encode((ROOT/'source'/name).read_bytes()).decode()
 return rect(x-10,y-10,w+20,h+20,'#10151c',27)+f'<image x="{x}" y="{y}" width="{w}" height="{h}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,{data}"/>'
for idx,(slug,title,kicker,bg,fg,accent,screen,stack,features,nodes,note) in enumerate(P):
 for kind in ['cover','features','architecture']:
  s=rect(0,0,1600,1000,bg)
  s+=txt(76,74,'CHARITHA ADIKARI   /   ENGINEERING PORTFOLIO',21,accent,'600')
  s+=txt(76,139,kicker,23,fg,'500')
  s+=txt(76,245,title if slug!='distribution' else 'Distribution',84,fg,'700','DejaVu Serif' if slug in ['nexa','sewzio'] else 'DejaVu Sans')
  if slug=='distribution':s+=txt(80,303,'Management System',40,fg)
  s+=rect(78,335,95,5,accent)
  if kind=='cover':
   if screen:
    if slug=='meetmind':s+=ui(screen,926,170,560,765)
    elif slug=='nexa':s+=ui(screen,1010,225,370,661)
    else:s+=ui(screen,1040,120,351,780)
   else:
    for n,label in enumerate(['SALES','ORDERS','PAYMENTS','REPORTING']):
     x=820+(n%2)*345;y=405+(n//2)*210
     s+=rect(x,y,310,170,'#fff',20)+txt(x+26,y+56,f'0{n+1}',24,accent,'700')+txt(x+26,y+111,label,29,fg,'700')
   for n,line in enumerate(stack):s+=txt(80,435+n*72,line,30,fg,'500')
   if slug=='nexa':
    for n,c in enumerate(['#b2bda0','#d2b9a6','#84939a','#7e6d72','#c4b577']):s+=rect(80+n*105,725,85,85,c,42)
    s+=txt(80,857,'Color visualization from the project demo',23,fg)
   elif slug=='sewzio':s+=f'<path d="M80 720 C250 540 520 920 740 730" stroke="{accent}" stroke-width="3" fill="none" stroke-dasharray="9 9"/>'
   elif slug=='lumaedge':s+=rect(80,710,650,90,'none',42,accent)+txt(110,768,'Tone. Width. Brightness. Control.',27,fg)
   else:s+=txt(80,785,'Software designed around real workflows.',25,fg)
  elif kind=='features':
   s+=txt(80,403,'Inside the experience',34,accent,'700')
   for n,line in enumerate(features):
    s+=txt(80,488+n*124,f'0{n+1}',23,accent,'700')
    for k,l in enumerate(textwrap.wrap(line,35)):s+=txt(145,490+n*124+k*42,l,31,fg,'500')
   if screen:s+=ui(screen,1010,290,350 if slug!='meetmind' else 450,620)
   else:
    s+=rect(940,420,510,280,'#fff',24)
    s+=txt(980,483,'ROLE BOUNDARIES',23,accent,'700')
    for n,l in enumerate(['Administrator','Sales representative','Coordinator · Customer']):s+=txt(980,548+n*53,l,27,fg)
   s+=txt(80,892,'Built around practical workflows',21,accent)
  else:
   s+=txt(80,414,'Engineering structure',34,accent,'700')
   s+=f'<path d="M755 548 H820 M418 615 V675 M1180 615 V675" stroke="{accent}" stroke-width="3" fill="none"/>'
   for n,node in enumerate(nodes):
    x=80+(n%2)*760;y=480+(n//2)*195
    s+=rect(x,y,675,135,'#ffffff' if slug in ['nexa','distribution','minipos'] else '#1d2b38',22)
    s+=txt(x+28,y+45,f'0{n+1}',21,accent,'700')+txt(x+28,y+96,node,33,fg,'500')
   s+=txt(80,883,'Application components · Verified implementation boundaries',21,accent)
  s+=txt(80,963,note,19,fg)
  svg='<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">'+s+'</svg>'
  dest=ROOT/f'{slug}-{kind}.svg';dest.write_text(svg)
  cairosvg.svg2png(bytestring=svg.encode(),write_to=str(OUT/f'{slug}-{kind}.png'))
  Image.open(OUT/f'{slug}-{kind}.png').save(OUT/f'{slug}-{kind}.webp',quality=90)
print('Rendered 18 editable SVGs and 36 PNG/WebP exports')
