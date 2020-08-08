from nltk.corpus import stopwords

no_words = set(
    [
        "no",
        "nope",
        "nah",
        "under no circumstances",
        "of course not",
        "absolutely not",
        "naw",
        "nay",
        "nada",
        "nae",
        "never",
        "negative",
        "not at all",
    ]
)

yes_words = set(
    [
        "yes",
        "yea",
        "yeah",
        "ok",
        "okay",
        "sure",
        "alright",
        "very well",
        "all right",
        "of course",
        "by all means",
        "certainly",
        "absolutely",
        "indeed",
        "affirmative",
        "agreed",
        "roger",
        "aye",
        "yah",
        "yup",
        "uh-huh",
        "okay",
        "okey-doke",
        "achcha",
        "righto",
        "surely",
    ]
)

stop_words = set(stopwords.words("english"))

