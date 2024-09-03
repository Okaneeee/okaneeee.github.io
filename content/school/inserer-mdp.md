---
title: "Insérer un Mot de Passe"
date: 2024-08-28T23:38:49+02:00
draft: false
author: Anatole
tags:
    - School
    - Unreal Engine
    - Blueprints
image: /images/school/inserer_mdp/banner.png
description: "Insérer un Mot de Passe (Insert a Password) is a serious game about cybersecurity."
toc:
---

Insérer un Mot de Passe (Insert a Password) is a [serious game](https://en.wikipedia.org/wiki/Serious_game) about cybersecurity. The player plays the role of a robotic agent that needs to change the password of three computers. In order to win, the player needs to change the passwords until the main timer runs out, if any password is decrypted, the player loses. The game was developed in [Unreal Engine 5](https://www.unrealengine.com/unreal-engine-5) using [Blueprints](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine), in a team of 15 people, eleven artists from the [NAD-UQAC](https://www.nad.ca/) and four programmers from [UQAC](https://www.uqac.ca). <br>
This was the third project made in the context of the course "Making a Video Game" ([8GIF185](https://programmes.uqac.ca/8GIF185) *The page is in French*).

## Retrospective
I was in charge of the game loop as well as the timers.

The team was really big this time, and because there were not enough programmers, we had to downscale the project three times. Thankfully, the original idea of changing password was the first thing we implemented, so we didn't have to change the core mechanics, but we weren't able to implement all the features we wanted (for example, sort mails in a [Paper Please](https://papersplea.se)-like way)

## Features
Game loop:
- The player need to change the password of three computers
- The player has a limited time to change the passwords
- If **one** password is decrypted, the player loses
- The player wins if the main timer runs out

Timers:
- The main timer is displayed on top of the screen
- The timer for each computer is displayed above computer on the scene
- The timer of the computer is reset when the player changes the password
- Depending on the time remaining, the timer changes color (green, orange, red)

Passwords:
- The passwords are displayed on the mainframe computer
- The passwords are gradually decrypted
- The player need to change the password before it is decrypted, it is done by writing the current password and the new password

Controls:
- The player can move using `WASD` / `ZSQD` and sprint using `LShift`
- The player can interact with the computers using `E` <br>
<img src="/images/school/inserer_mdp/screens/controls.png" width="480" height="270"/> <br>
***Controls:** Movements - Sprint | Move the camera - Interact | Pause - Exit the computer (in game)*

## The game
*The whole game is in French due to the course requirements.* <br>
The game is not available for download, but you can watch the gameplay below.

### Screenshots

![Main menu](/images/school/inserer_mdp/screens/main_menu.png "Main menu")
*New Game | Settings | Credits | Quit*

![Settings](/images/school/inserer_mdp/screens/settings.png "Settings")
***Settings:** Controls | Audio | Display | Score | Credits*

![Gameplay](/images/school/inserer_mdp/screens/gameplay.png "Gameplay")

![Mainframe & Computer](/images/school/inserer_mdp/screens/mainframe_computer.png "Mainframe & Computer")
***Right image**: Encrypted password | Old password | New password*

![Win & Lose Menu](/images/school/inserer_mdp/screens/win_lose_menu.png "Win & Lose Menu")
***Left image:** You've made it! Our customers' personal information remained protected, as did their money. Congratulations! Would you like to play again? Yes | No* <br>
***Right image:** You have failed! Our customers' information such as <span title="Social Security Number" style="text-decoration: underline;">SSN</span>, names and credit card numbers have been compromised because of you! Would you like to start again? Yes | No*

### Demo
<video width="720" height="405" controls muted>
    <source src="/images/school/inserer_mdp/vid/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
    You can download the video <a href="/images/school/inserer_mdp/vid/demo.mp4">here</a>.
</video>