$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function () {
      $(this).attr("disabled", "disabled");
      var index = $("table tbody tr:last-child").index();
      var row =
        "<tr>" +
        '<td><input type="text" class="form-control" name="id" id="id"></td>' +
        '<td><div style="height:0px;overflow:hidden"> <input type="file" id="fileInput" name="fileInput" /></div><button type="button" onclick="chooseFile();" class="btn">choose file</button></td>' +
        '<td><input type="text" class="form-control" name="name" id="name"></td>' +
        '<td><input type="text" class="form-control" name="category" id="category"></td>' +
        '<td><input type="number" class="form-control" name="Price-exc" id="price-in-tax-exc"></td>' +
        '<td><input type="number" class="form-control" name="Price-inc" id="price-in-tax-inc"></td>' +
        '<td><input type="number" class="form-control" name="maxQuantity" id="quantity-in-max"></td>' +
        '<td><input type="number" class="form-control" name="minQuantity" id="quantity-in-min"></td>' +
        '<td><select class="btn"><option value="Yes">Yes</option><option value="No">No</option></select></td>' +
        "<td>" +
        actions +
        "</td>" +
        "</tr>";
      $("table").append(row);
      $("table tbody tr")
        .eq(index + 1)
        .find(".add, .edit")
        .toggle();
      $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function () {
      var empty = false;
      var input = $(this).parents("tr").find('input[type="text"]');
      input.each(function () {
        if (!$(this).val()) {
          $(this).addClass("error");
          empty = true;
        } else {
          $(this).removeClass("error");
        }
      });
      $(this).parents("tr").find(".error").first().focus();
      if (!empty) {
        input.each(function () {
          $(this).parent("td").html($(this).val());
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").removeAttr("disabled");
      }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function () {
      $(this)
        .parents("tr")
        .find("td:not(:last-child)")
        .each(function () {
          $(this).html(
            '<input type="text" class="form-control" value="' +
              $(this).text() +
              '">'
          );
        });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function () {
      $(this).parents("tr").remove();
      $(".add-new").removeAttr("disabled");
    });
  });

  // Choose file 
  function chooseFile() {
    $("#fileInput").click();
 }