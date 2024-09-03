---
title: "Malum Habootus"
date: 2024-08-28T23:38:39+02:00
draft: false
author: Anatole
tags:
    - School
    - Unreal Engine
    - Blueprints
image: /images/school/malum_habootus/banner.png
description: "Malum Habootus is a restyled version of the classic game Bomberman, where the players control students placing explosive jar of ghosts in a haunted house."
toc:
---

Malum Habootus is a restyled version of the classic game [Bomberman](https://en.wikipedia.org/wiki/Bomberman), where the players control students placing explosive jar of ghosts in a haunted house. The goal is to eliminate other players by dragging them into explosions of ghosts. The game was developed in [Unreal Engine 5](https://www.unrealengine.com/unreal-engine-5) using [Blueprints](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine), in a team of 9 people, six artists from the [NAD-UQAC](https://www.nad.ca/) and three programmers from [UQAC](https://www.uqac.ca). <br>
This was the second project made in the context of the course "Making a Video Game" ([8GIF185](https://programmes.uqac.ca/8GIF185) *The page is in French*).

## Retrospective
I was in charge of the bonus system and the walls.

There were more artists in this project, so they had more 'free time' and decided to do the level design, the menus, and the character choice. Because they decided to do this, we finished the project earlier than expected. I had to adapt to this situation and help them with the level design because the breakable walls were working with spawners that were placed in the level.

## Features
Bonuses:
- The player can collect bonuses that can help them
- The bonuses spawn randomly after a wall is destroyed
- A bonus increases the bomb range
- A bonus protects the player from an explosion

Walls:
- The player can destroy walls
- The walls spawn randomly in the level each time the game starts
- The walls have a chance to spawn a bonus when destroyed

Characters:
- The player can choose between different characters
<img src="/images/school/malum_habootus/characters.png" width="500" height="200"/>
- The characters are controlled using a controller
- The game is played locally with up to 4 players

## The game
*The whole game is in French due to the course requirements.* <br>
The game is not available for download, but you can watch the gameplay below.

### Screenshots

![Main menu](/images/school/malum_habootus/screens/main_menu.png)

![Number of players](/images/school/malum_habootus/screens/number_select.png)

![Player selection](/images/school/malum_habootus/screens/player_select.png)

![Map](/images/school/malum_habootus/screens/map.png)

### Demo
A demo will be available once I have a second controller.
<!-- <video width="640" height="360" controls muted>
    <source src="/images/school/malum_habootus/vid/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
    You can download the video <a href="/images/school/malum_habootus/vid/demo.mp4">here</a>.
</video> -->