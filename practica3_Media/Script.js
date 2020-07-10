function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundPlay("musica",true);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function Button2_OnClick(){
StackTrace="Button2.Al Hacer Clic";
SceneNext();
SoundPlay("botones",false);

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.Al Hacer Clic";
VideoPause("video");
SoundPlay("botones",false);

}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.Al Liberar";
VideoResume("video");
SoundPlay("botones",false);

}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.Al Hacer Clic";
VideoSetVolume("video",0);
SoundPlay("botones",false);

}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.Al Liberar";
VideoSetVolume("video",100);
SoundPlay("botones",false);
}

function Frame_Timeline1_0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.Al Hacer Clic";
CloseVideo("video");

}

function HotSpot1_OnRelease(){
StackTrace="HotSpot1.Al Liberar";
TimelineGotoAndPlay("timeline",0);

}

function Button1_OnClick(){
StackTrace="Button1.Al Hacer Clic";
ScenePrevious();
SoundPlay("botones",false);

}

function ToggleButton3_OnClick(){
StackTrace="ToggleButton3.Al Hacer Clic";
SoundPause("musica");
SoundPlay("botones",false);
}

function ToggleButton3_OnRelease(){
StackTrace="ToggleButton3.Al Liberar";
SoundResume("musica");
SoundPlay("botones",false);
}

