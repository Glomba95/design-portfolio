document.querySelectorAll("details").forEach((detail) => {
        detail.addEventListener("toggle", function () {
            if (this.open) {
                document.querySelectorAll("details").forEach((other) => {
                    if (other !== this) {
                        other.open = false;
                    }
                });
            }
        });
});
