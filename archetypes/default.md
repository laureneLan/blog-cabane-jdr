+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'
series = []
tags = []
summary = ""
draft = true

[session]
infos = [
  {"Date"             = "{{ .Date }}"},
  {"Durée"            = ""},
  {"Scènes"           = ""},
  {"Objectifs"        = ""},
  {"Résumé précédent" = ""},
]
fils = [""]
horloges = [
  {label = "", total = 4, rempli = 0, unite = ""},
]
+++